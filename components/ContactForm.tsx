'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContact } from '@/app/actions';
import styles from './ContactForm.module.css';

const initialState = {
    success: false,
    message: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className={styles.submitBtn} disabled={pending}>
            {pending ? 'Submitting...' : 'Get Free Automation Audit'}
        </button>
    );
}

export default function ContactForm() {
    const [state, formAction] = useActionState(submitContact, initialState);

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Ready to Automate?</h2>
                <p className={styles.intro}>
                    Tell me about your manual process bottlenecks. I&apos;ll review them and suggest a plan.
                </p>

                {state.message && (
                    <div className={`${styles.message} ${state.success ? styles.success : styles.error}`}>
                        {state.message}
                    </div>
                )}

                <form action={formAction} className={styles.form}>
                    <div className={styles.group}>
                        <label htmlFor="name" className={styles.label}>Full Name</label>
                        <input type="text" id="name" name="name" className={styles.input} required placeholder="John Doe" />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="contact" className={styles.label}>Email or WhatsApp Number</label>
                        <input type="text" id="contact" name="contact" className={styles.input} required placeholder="john@example.com" />
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="businessType" className={styles.label}>Business Type</label>
                        <select id="businessType" name="businessType" className={styles.select} defaultValue="Small Business">
                            <option value="Small Business">Small Business</option>
                            <option value="Agency">Agency (Marketing, HR, etc)</option>
                            <option value="Operations">Operations / Logistics</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className={styles.group}>
                        <label htmlFor="problem" className={styles.label}>What&apos;s your biggest manual task?</label>
                        <textarea
                            id="problem"
                            name="problem"
                            className={styles.textarea}
                            required
                            placeholder="e.g. Copying data from WhatsApp to Excel takes 2 hours daily..."
                        />
                    </div>

                    {/* Honeypot Field */}
                    <input type="text" name="honey" className={styles.honey} tabIndex={-1} autoComplete="off" />

                    <SubmitButton />
                </form>
            </div>
        </section>
    );
}
