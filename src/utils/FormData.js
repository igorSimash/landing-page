export const FormingData = (pos_id, name, email, phone) => {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    formData.append('position_id', pos_id)
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone',phone);
    formData.append('photo', fileField.files[0]);
    return formData
}