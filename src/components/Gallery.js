import React from "react";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Gallery = () => {
  const images = [
    // {
    //   "No.": 1,
    //   NAME: "JERRY P. PAMINDALAN",
    //   POSITION: "Vocational School Administrator II",
    // },
    {
      "No.": 2,
      NAME: "JOYSEDYLL M. FAJUTNAO",
      POSITION: "Vocational Instruction Supervisor I",
    },
    {
      "No.": 3,
      NAME: "ANNA CHRISTINA C. MARTINEZ",
      POSITION: "Associate Professor II",
    },
    {
      "No.": 4,
      NAME: "ONIE F. GALICIA",
      POSITION: "Assistant Professor III",
    },
    {
      "No.": 5,
      NAME: "FELIPE S. GADO",
      POSITION: "Assistant Professor III",
    },
    {
      "No.": 6,
      NAME: "GIL M. FRANCISCO",
      POSITION: "Assistant Professor I",
    },
    {
      "No.": 7,
      NAME: "PERRY JOY M. GALASAO",
      POSITION: "Instructor III",
    },
    {
      "No.": 8,
      NAME: "JONAS C. LORENZO",
      POSITION: "Instructor II",
    },
    {
      "No.": 9,
      NAME: "JENETTE G. FETALVERO",
      POSITION: "Administrative Officer IV",
    },
    {
      "No.": 10,
      NAME: "U M. MACAPAGAL",
      POSITION: "Administrative Officer III",
    },
    {
      "No.": 11,
      NAME: "APRIL JOY P. LOTA",
      POSITION: "Administrative Officer I",
    },
    {
      "No.": 12,
      NAME: "MARIA ELENA G. GACA",
      POSITION: "Administrative Assistant VI",
    },
    {
      "No.": 13,
      NAME: "MA. MELODY G. GALICIA",
      POSITION: "Nurse II",
    },
    {
      "No.": 14,
      NAME: "MARILOU G. MAESTRO",
      POSITION: "Administrative Aide III",
    },
    {
      "No.": 15,
      NAME: "MELANIE P. MENDOZA",
      POSITION: "School Librarian II",
    },
    {
      "No.": 16,
      NAME: "RUSTUM M. RUBIO",
      POSITION: "Administrative Aide I",
    },
    {
      "No.": 17,
      NAME: "ISIDRO M. GALASAO",
      POSITION: "Watchman II",
    },
    {
      "No.": 18,
      NAME: "TEODY L. GACA",
      POSITION: "Watchman II",
    },
    {
      "No.": 19,
      NAME: "ELIZALDE D. CATAJAY",
      POSITION: "Security Guard I",
    },
    {
      "No.": 20,
      NAME: "MELANIS BALDEA",
      POSITION: "Instructor I",
    },
    {
      "No.": 21,
      NAME: "TERESA F. GALICIA",
      POSITION: "Instructor I",
    },
    {
      "No.": 22,
      NAME: "MA. DIANNE LU L. GALICIA",
      POSITION: "Instructor I",
    },
    {
      "No.": 23,
      NAME: "ROMESTAN G. FERNANDEZ",
      POSITION: "Instructor I",
    },
    {
      "No.": 24,
      NAME: "JUNE RYAN G. FUENTES",
      POSITION: "Instructor I",
    },
    {
      "No.": 25,
      NAME: "PRENZ JUMER B. LOTA",
      POSITION: "Instructor I",
    },
    {
      "No.": 26,
      NAME: "JHERALDIN V. VILLAN",
      POSITION: "Administrative Aide III",
    },
  ];
  return (
    <div className="horizontal-scroll">
      <div className="image-container">
        {images.map((image) => (
          <div className="image-name">
            <PreviewCompatibleImage
              imageInfo={"/img/employees-gallery/" + image.NAME + ".jpg"}
            />
            <p>{image.NAME}</p>
            <span>{image.POSITION}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
