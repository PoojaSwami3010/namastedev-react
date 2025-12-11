import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"

ImageTrack("should render Header Component with cart itnems 0",() => {
    render(
        <BrowserRouter>
        <Provider store={appStore
        }>
            <Header />
            </Provider></BrowserRouter>
    );
    const CartItmes=screen.getByText("Cart - (0 Items)");
    expect(CartItmes).toBeInTheDocument();
})