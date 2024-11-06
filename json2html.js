
export default function json2html(data) {
    if (!Array.isArray(data) || data.length === 0) {
        return "<table data-user='rohaan.khan11@gmail.com'><thead></thead><tbody></tbody></table>";
    }

    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

    let html = `<table data-user="rohaan.khan11@gmail.com">`;

    html += "<thead><tr>";
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr></thead><tbody>";


    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
        });
        html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}
