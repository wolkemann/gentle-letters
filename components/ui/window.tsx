import { ReactNode } from "react";

type WindowProps = {
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export default function Window({ title, footer, children }: WindowProps) {
  return (
    <div className="bg-window-bg-color border rounded border-window-border-color p-1">
      {title && (
        <div className="bg-window-innerbg-color border rounded border-window-innerborder-color px-3 py-1 text-sm font-bold w-fit mb-1">
          {title}
        </div>
      )}
      <div className="bg-window-innerbg-color border rounded border-window-innerborder-color p-5">
        {children}
      </div>
      {footer && <div className="mt-1">{footer}</div>}
    </div>
  );
}
