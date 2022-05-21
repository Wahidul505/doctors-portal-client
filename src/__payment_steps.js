/**
 * 1. Install strip & react stripe js in client side.
 * 2. Open strip account on strip website.
 * 3. Get the payment publishable key from the strip website dashboard or developer section
 * 4. Create <Elements></Elements> wrapper using publishable key and inside Elements wrap the CheckoutForm route in it.
 * 5. Create CheckoutForm Component with CardElement, useStripe & useElements inside it.
 * 6. Get the CardElement info using element.getElement(CardElement).
 * 7. Get Credit card info(paymentMethod/error) and display error.message if getting any error.
 * #. For documentation: go to react strip js github > examples > hooks > 0-Card-Minimal.js
 * -----------------------------------------------------------------
 * 8. Install strip in server side.
 * 9. Get the payment secret key from stripe dashboard and store it in server > .env file.
 * 10. Require strip and Create an api post method in backend to post payment indent and send booking information to it.
 * 11. In client side > CheckoutForm, create fetch with post method and send booking information to payment indent api.
 * 12. In client side > CheckoutForm > handleSubmit, confirm the payment with confirmCardPayment() and provide payment info in it.
 * 13. Check the intentError, if exist than return; from the function if not than consider it as successful payment than display the transaction id to the user.
 * 14. If success save the payment information with the patient name, email and transaction id in database.
 * 15. The payment information will also automatically save is your strip account > payment section with the info you gave in payment_method > billing_details.
*/