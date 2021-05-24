import { render, screen } from '@testing-library/react';
import Home from './'
import { DogContext } from '../../contexts/DogContext'
import { BrowserRouter as Router, Link } from 'react-router-dom'

jest.mock("../../contexts/DogContext")

describe('<Home />', () => {
    const providerValue = {
        fetchingAllProps: false,
        fetchingSingleProps: false,
        dogProps: [
            {
                slug: 1,
                breed: 'corgi',
                images: ['img1', 'img2', 'img3', 'img4']
            },
            {
                slug: 2,
                breed: 'shiba inu',
                images: ['img1', 'img2', 'img3', 'img4']
            },
            {
                slug: 3,
                breed: 'bulldog',
                images: ['img1', 'img2', 'img3', 'img4']
            }
        ],
        currentDogProps: {},
        nextDogProps: {},
        dispatch: jest.fn(() => {})
    }
    beforeEach(() => {
        render(
            <Router>
            <DogContext.Provider value={providerValue}>
                <Home />
            </DogContext.Provider>
            </Router>
        );
    });

    test('number of links should match length of dog props', async () => {
        const links = await screen.findAllByRole('link')
        console.log(links)
        expect(links).toHaveLength(providerValue.dogProps.length)
    })

    test('anchor tags link to correct pages', async () => {
        const corgiLink = screen.getByText('corgi').closest('a')
        const shibaInuLink = screen.getByText('shiba inu').closest('a')
        expect(corgiLink).toHaveAttribute('href', '/dogs/1')
        expect(shibaInuLink).toHaveAttribute('href', '/dogs/2')
    })

});