declare module 'qrcode' {
    interface QRCodeOptions {
      errorCorrectionLevel?: 'low' | 'medium' | 'quartile' | 'high';
      type?: 'image/png' | 'image/jpeg' | 'image/webp';
      margin?: number;
      width?: number;
      color?: {
        dark?: string;
        light?: string;
      };
    }
  
    export function toDataURL(
      text: string,
      options?: QRCodeOptions
    ): Promise<string>;
  
    export function toCanvas(
      canvas: HTMLCanvasElement,
      text: string,
      options?: QRCodeOptions
    ): void;
  
    export function toString(
      text: string,
      options?: QRCodeOptions
    ): Promise<string>;
  }
  