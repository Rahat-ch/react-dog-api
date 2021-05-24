import { render, screen } from '@testing-library/react';
import DogGallery from './'

describe('<DogGallery />', () => {
    const currentDogProps = {
        breed: 'corgi',
        images: ['testImage.com/test1.jpg', 'testImage.com/test2.jpg', 'testImage.com/test3.jpg', 'testImage.com/test4.jpg'],
        slug: 89
    }
    beforeEach(() => {
        render(<DogGallery currentDogProps={currentDogProps} />);
    });
    test('headline matches dog breed', () => {
        const headlineElement = screen.getByText(/corgi/i);
        expect(headlineElement).toBeInTheDocument();
    })
    test('should return 4 images', async () => {
        const images = await screen.findAllByRole('img')
        expect(images).toHaveLength(4)
    })
    
});
