import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('Search Form', () => {
    it('Is rendered', () => {
        render(<SearchForm />);
        const textPlaceholder = screen.getByPlaceholderText('Buscar productos, marcas y más...');
        expect(textPlaceholder).toBeInTheDocument();
    });

    it('should renders the form elements', () => {
        render(<SearchForm />);
        const inputEle = screen.getBy
    });
}); 