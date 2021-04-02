import Swal from 'sweetalert2';
export const SuccessAlert = (title) => {
    Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: title,
        showConfirmButton: false,
        showCloseButton: true,
        timer: 2500,
        showClass: {
            popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
        },
    });
};
export const FailLoginAlert = (title) => {
    Swal.fire({
        icon: 'error',
        title: title,
        footer: '<a href="register">회원가입 하러가기</a>',
    });
};
export const FailAlert = (title) => {
    Swal.fire({
        icon: 'error',
        title: title,
    });
};
