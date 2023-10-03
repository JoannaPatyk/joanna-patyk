import { toast } from 'react-toastify';

export const showErrorEmailMessage = () => {
    toast.error('Coś poszło nie tak, proszę podać prawidłowy adres e-mail ...', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-error-message',
        progressClassName: 'error-bar',
        icon: '😟'
    });
};

export const showError = () => {
    toast.error('Nie udało się, spróbuj ponownie... ', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-error-message',
        progressClassName: 'error-bar',
        icon: '😟'
    });
};

export const showMessage = () => {
    toast.success('Dziękujemy, wiadomość została poprawnie wysłana!', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-success-message',
        progressClassName: 'success-bar',
        icon: '💜'
    });
};
