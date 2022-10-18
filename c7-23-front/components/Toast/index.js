import { useEffect, useState } from "react";

export default function Toast({
  content,
  className,
  show = true,
  timeout = 2000,
}) {
  const [isShow, setIsShow] = useState(show);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, timeout);
  }, [timeout]);

  return (
    isShow && (
      <div className="toast w-auto min-w-max toast-center z-50 toastAnimation">
        <div className={className}>
          <div className="relative w-full">
            <span>{content}</span>
          </div>
        </div>
      </div>
    )
  );
}
