interface TallyPopupOptions {
  layout?: "modal" | "default";
  width?: number;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: { text: string; animation: string };
  autoClose?: number;
  showOnce?: boolean;
  doNotShowAfterSubmit?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onSubmit?: () => void;
}

interface TallyAPI {
  openPopup: (formId: string, options?: TallyPopupOptions) => void;
  closePopup: (formId: string) => void;
  loadEmbeds?: () => void;
}

declare global {
  interface Window {
    Tally?: TallyAPI;
  }
}

export {};
