const storageUrl = document.querySelector('meta[name="storage-url"]').content

async function uploadImage(event) {
    const file = event.target.files;
    const input = event.target.dataset.target
    // Create a new FormData object
    const formData = new FormData();
    // Append the file to the FormData object
    formData.append('file', file[0]);

    let response = await fetch(storageUrl + '/public', {
        method: "POST",
        body: formData,
    });
    response = await response.json();
    console.log('response',response);
    document.querySelector('#'+input).value = response.name

}