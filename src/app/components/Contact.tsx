"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSending(true);
    setStatus("");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Failed to send message.");
        return;
      }

      setStatus("Message sent successfully.");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mb-12">
          <p className="mb-3 text-primary">Contact Me</p>

          <h2 className="section-title">Let&apos;s work together</h2>

          <p className="section-description">
            Have a project in mind or want to get in touch? Send me a message.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-text-primary">
              Get in touch
            </h3>

            <p className="mt-4 max-w-md leading-8 text-text-secondary">
              I&apos;m interested in frontend development opportunities and
              collaborative projects. You can contact me through email or
              connect with me on GitHub and LinkedIn.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:yasamankarbalaii@gmail.com"
                className="block text-text-secondary transition-colors hover:text-primary"
              >
                yasamankarbalaii@gmail.com
              </a>

              <a
                href="https://github.com/YasamanKarbalaiiH"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary transition-colors hover:text-primary"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/yasaman-karbalaei-663524436/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card p-6 md:p-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border bg-surface-light px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-border bg-surface-light px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full resize-none rounded-lg border border-border bg-surface-light px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className="text-sm text-text-secondary">{status}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
