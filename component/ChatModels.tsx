"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
export default function ChatModels() {
  const { data: modelOptions, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-5-nano",
  });

  if (!modelOptions) {
    return null;
  }
  return (
    <div className="bg-white rounded-lg text-black w-full mt-2">
      <Select
        options={modelOptions.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        className="mt-2"
        onChange={(e) => setModel(e.value)}
      ></Select>
    </div>
  );
}
