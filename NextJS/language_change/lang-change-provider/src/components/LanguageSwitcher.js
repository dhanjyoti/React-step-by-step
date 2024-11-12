import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "@tanstack/react-query";

const fetchContent = async () => {
  const response = await fetch("/api/content");
  return response.json();
};

const LanguageSwitcher = ({ page }) => {
  const { language, changeLanguage } = useLanguage();
  const { data, isLoading, error } = useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading content</p>;

  // Access the correct content for the page and selected language
  const pageContent = data?.[page]?.[language] || "Content not available";

  return (
    <div>
      <label htmlFor="language-select">Select Language: </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>

      <h1 className="flex justify-center text-2xl">{pageContent}</h1>
    </div>
  );
};

export default LanguageSwitcher;
