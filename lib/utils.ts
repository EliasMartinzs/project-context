import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}
