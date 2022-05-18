/**
 * 1. Install strip & react stripe js in client side.
 * 2. Open strip account on strip website.
 * 3. Get publishable key from the strip website dashboard or developer section
 * 4. Create <Elements></Elements> wrapper using publishable key and inside Elements wrap the CheckoutForm route in it.
 * 5. Create CheckoutForm Component with CardElement, useStripe & useElements inside it.
 * 6. Get the CardElement info using element.getElement(CardElement).
 * 7. Get Credit card info(paymentMethod/error) and display error.message if getting any error.
 * -----------------------------------------------------------------
 * 8. Install strip in server side.
 * 9. Get payment secret key from stripe dashboard and store it in backend .env file.
 * 10. Require strip and Create an api post method in backend to post payment indent and send booking information to it.
 * 11. In client side > CheckoutForm create fetch with post method and send booking information to payment indent api.
 * 12. 
*/