import { useTranslations } from "next-intl";
import Button from "../Buttons/Button";
export default function ContactInformation() {
  const t = useTranslations("Navigation");
  return (
    <>
      {" "}
      <div>
        <h2 className="text-3xl font-semibold mb-6">
          {t("send_message.title")}
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("send_message.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("send_message.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("send_message.subject")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("send_message.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <Button
            value={t("send_message.send_message")}
            onClick={async (e) => {
              e.preventDefault();
              // Handle form submission
              const formData = new FormData(
                (e.target as HTMLElement).closest("form") as HTMLFormElement
              );
              const contactData = {
                name: formData.get("name"),
                email: formData.get("email"),
                subject: formData.get("subject"),
                message: formData.get("message"),
              };
              console.log("Contact Data:", contactData);
              try {
                const response = await fetch(
                  "http://localhost:8000/api/v1/customers/contact-us",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactData),
                  }
                );

                if (response.ok) {
                  // Handle success
                  console.log("Message sent successfully");
                  (e.target as HTMLElement).closest("form")?.reset();
                } else {
                  // Handle error
                  console.error("Failed to send message");
                }
              } catch (error) {
                console.error("Error sending message:", error);
              }
            }}
          />
        </form>
      </div>
    </>
  );
}
