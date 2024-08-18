import { ReactNode } from "react";

type WindowProps = {
  title?: ReactNode;
  borderless?: boolean;
  children?: ReactNode;
  footer?: ReactNode;
};

export default function Window({
  title,
  footer,
  borderless,
  children,
}: WindowProps) {
  return (
    <div className="bg-window-bg-color border rounded border-window-border-color p-1">
      {title && (
        <div className="bg-window-innerbg-color border rounded border-window-innerborder-color px-3 py-1 font-bold w-fit mb-1">
          {title}
        </div>
      )}
      {!borderless ? (
        <div className="bg-window-innerbg-color border rounded border-window-innerborder-color p-4">
          {children}
        </div>
      ) : (
        children
      )}
      {footer && <div className="mt-1">{footer}</div>}
    </div>
  );
}
