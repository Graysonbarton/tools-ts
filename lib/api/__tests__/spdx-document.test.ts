import { SPDXDocument } from "../spdx-document";

test("generates valid namespace from document name", () => {
  const documentName = "-!+My:first test-Name";
  const document = SPDXDocument.createDocument(documentName);
  expect(document.creationInfo.documentNamespace.substring(0, 22)).toBe(
    "urn:My-first-test-Name",
  );
});