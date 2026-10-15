// Deployment settings for the voice collection page.
// uploadEndpoint: the presign function from Hristijan's AWS piece
// (contract in ../HRISTIJAN_REQUEST.md). Leave it empty for TEST MODE:
// nothing is uploaded and the page offers a zip download at the end.
window.COLLECTION_CONFIG = {
  uploadEndpoint: "",
  // Shared sentences read every session: Harvard list 1, complete (its sound
  // balance holds for the whole list of 10, so do not drop any).
  sharedIds: ["H01", "H02", "H03", "H04", "H05", "H06", "H07", "H08", "H09", "H10"],
  poolPerSession: 6,          // personal sentences per session (3 sessions = 18 distinct per person)
  questionsPerSession: 3,     // free-speech questions per session (9 of 15 per person)
  questionTargetSeconds: 45,  // suggested answer length
  maxRecordSeconds: 120,      // hard stop for any single recording
  pageVersion: "recorder-v3",
};
