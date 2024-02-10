import { ProductProps } from '@/utils/data/products'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import * as cartMemory from './helpers/cart-in-memory'

export type ProductCartProps = ProductProps & {
	quantity: number
}

type StateProps = {
	products: ProductCartProps[]
	add: (product: ProductCartProps) => void
	remove: (productId: string) => void
	clear: () => void
}

export const useCartStore = create(
	persist<StateProps>(
		(set) => ({
			products: [],

			add: (product: ProductProps) =>
				set((state) => ({
					products: cartMemory.add(state.products, product),
				})),

			remove: (productId: string) =>
				set((state) => ({
					products: cartMemory.remove(state.products, productId),
				})),

			clear: () => set({ products: [] }),
		}),
		{
			name: 'nlw-expert:cart',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
)
