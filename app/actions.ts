'use server';

export type ActionState = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
};

export async function submitContact(prevState: ActionState, formData: FormData): Promise<ActionState> {
    // 1. Honeypot check (Spam protection)
    const honey = formData.get('honey');
    if (honey) {
        return { success: true, message: "Request received." };
    }

    // 2. Validate fields
    const name = formData.get('name') as string;
    const contact = formData.get('contact') as string;
    const businessType = formData.get('businessType') as string;
    const problem = formData.get('problem') as string;

    if (!name || !contact || !problem) {
        return {
            success: false,
            message: "Please fill in all required fields.",
        };
    }

    try {
        // 3. Send Data to Web3Forms
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            console.error("Missing Web3Forms Access Key");
            return { success: false, message: "Configuration error. Please contact directly." };
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `New Lead: ${name}`,
                from_name: "Prabhat World Website",
                message: `
                    Name: ${name}
                    Contact: ${contact}
                    Business Type: ${businessType}
                    Problem: ${problem}
                `,
                // Custom fields
                Name: name,
                Contact: contact,
                "Business Type": businessType,
                Problem: problem
            }),
        });

        const result = await response.json();

        if (result.success) {
            return {
                success: true,
                message: "Thanks! I've received your request and will be in touch shortly.",
            };
        } else {
            console.error("Web3Forms Error:", result);
            return {
                success: false,
                message: "Something went wrong. Please try again.",
            };
        }

    } catch (error) {
        console.error("Submission error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again or message on WhatsApp.",
        };
    }
}
