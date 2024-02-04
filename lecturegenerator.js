function generateLectureData() {
    const inputText = document.getElementById('lectureDataInput').value;
    const lectureData = JSON.parse(inputText);
    const outputBody = document.getElementById('outputBody');

    let html = '';
    lectureData.data.forEach((lecture, index) => {
        const lectureNumber = index + 1;
        const lectureCode = lecture._id;
        const lectureName = lecture.topic;
        html += `<tr>
            <td>${lectureNumber}</td>
            <td>${lectureName}</td>
            <td>${lectureCode}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>`;
    });

    outputBody.innerHTML = html;
}
