import fs from "fs";
import path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

export async function POST(req) {
  try {
    const data = await req.json();

    // Load your template.docx from public/templates folder
    const templatePath = path.resolve(process.cwd(), "public", "templates", "resume-template.docx");
    const content = fs.readFileSync(templatePath, "binary");

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    // Set JSON data to fill in the template
    doc.setData(data);

    try {
      doc.render();
    } catch (error) {
      console.error("Docxtemplater error:", error);
      throw error;
    }

    // Generate the document buffer
    const buf = doc.getZip().generate({ type: "nodebuffer" });

    // Return the buffer as a downloadable file
    return new Response(buf, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": 'attachment; filename="automateResume.docx"',
      },
    });
  } catch (error) {
    console.error("Resume generation failed:", error);
    return new Response("Failed to generate resume", { status: 500 });
  }
}
