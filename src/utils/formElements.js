const formElements = [
    { id: 'name', label: '2. Imię:', type: 'text', placeholder: 'Imię...' },
    { id: 'email', label: '3. Adres e-mail:', type: 'email', placeholder: 'E-mail...' },
    { id: 'phone', label: '4. Numer telefonu:', type: 'number', placeholder: 'Numer telefonu...' },
    { id: 'theme', label: '5. Jakiej tematyki ma dotyczyć strona?', type: 'text', placeholder: 'Branża...' },
    {
        id: 'appearance',
        label: '6. Czy masz już jakąś wizję jak powinna wyglądać strona?',
        type: 'textarea',
        placeholder: 'Treść wiadomości...'
    },
    {
        id: 'message',
        label: '7. Czy jest coś jeszcze o czym chcesz wspomnieć?',
        type: 'textarea',
        placeholder: 'Treść wiadomości...'
    }
];

export default formElements;
