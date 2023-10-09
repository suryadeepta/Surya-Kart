function searchText() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const content = document.querySelectorAll('.content p');

    content.forEach(paragraph => {
        const paragraphText = paragraph.textContent.toLowerCase();
        if (paragraphText.includes(searchText)) {
            paragraph.innerHTML = paragraphText.replace(
                new RegExp(searchText, 'gi'),
                '<span class="highlighted">$&</span>'
            );
        }
    });
}
