const formFields = [
    { id: 'name', label: '2. Imię:', name: 'name', type: 'text', placeholder: 'Imię...' },
    { id: 'email', label: '3. Adres e-mail:', name: 'email', type: 'email', placeholder: 'E-mail...' },
    { id: 'phone', label: '4. Numer telefonu:', name: 'phone', type: 'number', placeholder: 'Numer telefonu...' },
    {
        id: 'theme',
        label: '5. Jakiej tematyki ma dotyczyć strona?',
        name: 'theme',
        type: 'text',
        placeholder: 'Branża...'
    },
    {
        id: 'appearance',
        label: '5. Czy masz już jakaś wizję lub oczekiwania jak powinna wyglądać strona?',
        name: 'appearance',
        type: 'textarea',
        placeholder: 'Treść wiadomości...'
    },
    {
        id: 'message',
        label: '7. Czy jest coś jeszcze o czym chcesz wspomnieć?',
        name: 'message',
        type: 'textarea',
        placeholder: 'Treść wiadomości...'
    }
];

export default formFields;
