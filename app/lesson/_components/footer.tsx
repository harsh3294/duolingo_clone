import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: number;
};

export const Footer = ({ onCheck, status, disabled, lessonId }: Props) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");

  return (
    <footer
      className={cn(
        "lg:-h[140px] h-[100px] border-t-2",
        status.toUpperCase() === "correct".toUpperCase() &&
          "border-transparent bg-green-100",
        status.toUpperCase() === "wrong".toUpperCase() &&
          "border-transparent bg-rose-100"
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {status.toUpperCase() === "correct".toUpperCase() && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Nicely done!
          </div>
        )}
        {status.toUpperCase() === "wrong".toUpperCase() && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Try again.
          </div>
        )}
        {status.toUpperCase() === "completed".toUpperCase() && (
          <Button
            variant="default"
            size={isMobile ? "sm" : "lg"}
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            Practice again
          </Button>
        )}
        <Button
          disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          variant={
            status.toUpperCase() === "wrong".toUpperCase()
              ? "danger"
              : "secondary"
          }
        >
          {status.toUpperCase() === "none".toUpperCase() &&
            "Check".toUpperCase()}
          {status.toUpperCase() === "correct".toUpperCase() &&
            "Next".toUpperCase()}
          {status.toUpperCase() === "wrong".toUpperCase() &&
            "Retry".toUpperCase()}
          {status.toUpperCase() === "completed".toUpperCase() &&
            "Continue".toUpperCase()}
        </Button>
      </div>
    </footer>
  );
};
