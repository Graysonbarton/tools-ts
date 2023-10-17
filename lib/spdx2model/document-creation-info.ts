import type { Actor } from "./actor";

export interface DocumentCreationInfoOptions {
  created: Date;
  dataLicense: string;
  externalDocumentRefs: string[];
  creatorComment: string;
  licenseListVersion: string;
  documentComment: string;
}

export class DocumentCreationInfo {
  spdxVersion: string;
  spdxId: string = "SPDXRef-DOCUMENT";
  name: string;
  documentNamespace: string;
  created: Date;
  creators: Actor[];
  dataLicense: string;
  externalDocumentRefs: string[];
  creatorComment?: string;
  licenseListVersion?: string;
  documentComment?: string;

  constructor(
    spdxVersion: string,
    name: string,
    documentNamespace: string,
    creators: Actor | Actor[],
    options?: Partial<DocumentCreationInfoOptions>,
  ) {
    this.spdxVersion = spdxVersion;
    this.name = name;
    this.documentNamespace = documentNamespace;
    this.creators = Array.isArray(creators) ? creators : [creators];
    this.created = options?.created ?? new Date();
    this.dataLicense = options?.dataLicense ?? "CC0-1.0";
    this.externalDocumentRefs = options?.externalDocumentRefs ?? [];
    this.creatorComment = options?.creatorComment ?? undefined;
    this.licenseListVersion = options?.licenseListVersion ?? undefined;
    this.documentComment = options?.documentComment ?? undefined;
  }
}
