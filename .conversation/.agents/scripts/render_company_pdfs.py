from pathlib import Path
import fitz

ROOT = Path("attached_assets")
OUTPUT = Path(".agents/outputs/company-profile-review")
OUTPUT.mkdir(parents=True, exist_ok=True)

documents = {
    "profile": (
        ROOT / "PT_Direction_Global_Capital_-_Profile_Company_1791559705098.pdf",
        [1, 3, 4, 5, 6, 8, 9, 11, 13, 14, 15],
    ),
    "nib": (
        ROOT / "NIB_PT_DIRECTION_GLOBAL_CAPITAL_1791559814400.pdf",
        [1, 2],
    ),
    "tax": (
        ROOT / "A_01-DOC001-TIN_Card_in_V1-fo-xsl_DN261785484970694145152d7_1791559825520.pdf",
        [1],
    ),
}

for label, (path, pages) in documents.items():
    doc = fitz.open(path)
    for page_number in pages:
        if page_number > len(doc):
            continue
        pix = doc[page_number - 1].get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
        pix.save(OUTPUT / f"{label}-page-{page_number:02}.png")
    print(f"{label}: {len(doc)} pages; rendered {len(pages)} selected pages")
