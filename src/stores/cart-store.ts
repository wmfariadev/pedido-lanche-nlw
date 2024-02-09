import { ProductProps } from '@/utils/data/products'
import { create } from 'zustand'
import * as cartMemory from './helpers/cart-in-memory'

export type ProductCartProps = ProductProps & {
	quantity: number
}

type StateProps = {
	products: ProductCartProps[]
	add: (product: ProductCartProps) => void
	remove: (product: ProductCartProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
	products: [],

	add: (product: ProductProps) =>
		set((state) => ({
			products: cartMemory.add(state.products, product),
		})),

	remove: () => {},
}))
