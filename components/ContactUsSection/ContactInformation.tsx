import { useTranslations } from "next-intl";

export default function ContactInformation() {
  const t = useTranslations("Navigation");
  return (
    <>
      {" "}
      <div>
        <h2 className="text-3xl font-semibold mb-6">{t("contact_us")}</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">{t("address.title")}</h3>
            <p className="text-gray-600">
              {t("address.street")}
              <br />
              {t("address.district")}
              <br />
              {t("address.country")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">{t("phone.title")}</h3>
            <p className="text-gray-600">{t("phone.number1")}</p>
            <p className="text-gray-600">{t("phone.number2")}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">{t("email.title")}</h3>
            <p className="text-gray-600">{t("email.address")}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">
              {t("business_hours.title")}
            </h3>
            <p className="text-gray-600">
              {t("business_hours.monday_to_friday")}
              <br />
              {t("business_hours.saturday")}
              <br />
              {t("business_hours.sunday")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
