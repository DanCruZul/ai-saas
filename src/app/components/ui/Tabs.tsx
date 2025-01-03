import React from "react";
import { cn } from "@/app/utils/cn";
import type { Tab } from "../features/types"; // Ensure this import is correct

type TabsProps = {
  defaultValue: string;
  children: React.ReactNode;
};

type TabContentProps = {
  tab: Tab;
  children: React.ReactNode;
};

export const Tabs = ({ defaultValue, children }: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const tabs = React.Children.toArray(children)
    .filter((child): child is React.ReactElement<TabContentProps> =>
      React.isValidElement(child)
    )
    .map((child) => child.props.tab);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 border-b border-gray-200 md:grid-cols-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "flex w-full items-center justify-center p-6 text-base font-semibold transition-colors",
              "border-b md:border-b-0 md:border-r last:border-0",
              "hover:bg-gray-50",
              activeTab === tab.value
                ? "bg-white text-indigo-600"
                : "text-gray-600"
            )}
          >
            {tab.trigger}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement<TabContentProps>(child) &&
            child.props.tab.value === activeTab
          ) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};
