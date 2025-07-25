const editableTags = ["p", "h2", "li"];

editableTags.forEach(tag => {
    document.querySelectorAll(tag).forEach(el => {
        el.setAttribute("contenteditable", "true");
    });
});


function generatePDF() {
    const element = document.getElementById('resume');

    const options = {
        margin: [10, 10, 10, 10],
        filename: 'resume.pdf',
        html2canvas: {
            scale: 5,
            logging: false,
            scrollY: 0
        },
        jsPDF: {
            format: 'a4',
            orientation: 'portrait'
        },
    };

    html2pdf()
        .set(options)
        .from(element)
        .save();
}
