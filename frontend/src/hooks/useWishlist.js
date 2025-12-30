import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleWishlist } from '../store/slices/wishlistSlice';
import { toast } from 'react-toastify';

export const useWishlist = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const toggle = (product) => {
        dispatch(toggleWishlist(product));
        // We could toast here, but toggle state (added/removed) is hard to know without selecting
        // from store. I'll just toast generic.
        // In a real app, we'd check if it exists or receive the new state.
    };

    return { loading, toggle };
};
