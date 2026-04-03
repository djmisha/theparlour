<?php
/**
 * Payment Instructions Button Component
 * 
 * A reusable component for displaying payment instructions in a modal.
 * 
 * @param string $button_text - Text to display on the button
 * @param string $button_class - Additional CSS classes for styling
 */

// Default values
$button_text = $button_text ?? 'Payment Instructions';
$button_class = $button_class ?? 'content-btn';
$modal_id = 'payment-modal-' . mt_rand(100, 999); // Generate a unique modal ID
?>

<a class="<?php echo htmlspecialchars($button_class); ?>" 
        onclick="document.getElementById('<?php echo $modal_id; ?>').style.display='block'">
  <?php echo htmlspecialchars($button_text); ?>
</a>

<!-- Modal for Payment Instructions -->
<div id="<?php echo $modal_id; ?>" class="modal">
  <div class="modal-content">
    <span class="close" onclick="document.getElementById('<?php echo $modal_id; ?>').style.display='none'">&times;</span>
    <h3>Payment Methods</h3>
    <div class="modal-body">
      <p>Initiation fee: $1,000 | Annual dues: $500</p>
      
      <h4>We accept the following methods of payment:</h4>
      
      <div class="payment-option">
        <span class="payment-icon">💻</span>
        <div class="payment-details">
          <strong>Via PayPal:</strong>
          <p>Contact us for PayPal payment details.<br>
          Please include "Dues for (Your Name)" in the notes.</p>
        </div>
      </div>
      
      <div class="payment-option">
        <span class="payment-icon">💵</span>
        <div class="payment-details">
          <strong>In Person:</strong>
          <p>Dues may be remitted in person at any scheduled gathering. We accept cash and checks.</p>
        </div>
      </div>

      <div class="payment-option">
        <span class="payment-icon">✉️</span>
        <div class="payment-details">
          <strong>By Mail:</strong>
          <p>Make a check payable to "The Parlour" and contact us for mailing details.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
}

.modal-content {
  background-color: var(--color-bg-elevated, #171717);
  margin: 10% auto;
  padding: 25px;
  border: 1px solid #444;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  position: relative;
  animation: modalFadeIn 0.4s ease-out;
}

@keyframes modalFadeIn {
  from {opacity: 0; transform: translateY(-30px);}
  to {opacity: 1; transform: translateY(0);}
}

.modal-content h3 {
  color: var(--color-gold, #c9a959);
  font-family: 'Lobster Two', cursive;
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
}

.modal-content h4 {
  color: var(--color-gold, #c9a959);
  font-family: 'Lobster Two', cursive;
  font-size: 1.3rem;
  margin: 20px 0 15px;
}

.modal-body {
  color: var(--color-text-primary, #f0ece2);
}

.modal-body p {
  margin-bottom: 15px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.payment-option {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  border-left: 3px solid var(--color-gold, #c9a959);
  transition: transform 0.3s ease;
}

.payment-icon {
  font-size: 2rem;
  margin-right: 15px;
  flex-shrink: 0;
}

.payment-details {
  flex-grow: 1;
}

.payment-details strong {
  color: var(--color-text-primary, #f0ece2);
  display: block;
  margin-bottom: 5px;
  font-size: 1.15rem;
}

.payment-details p {
  margin: 0;
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  font-weight: bold;
  color: var(--color-gold, #c9a959);
  cursor: pointer;
  transition: color 0.3s;
}

.close:hover {
  color: var(--color-gold, #c9a959);
  opacity: 0.7;
}

/* Responsive styles */
@media (max-width: 768px) {
  .modal-content {
    width: 90%;
    margin: 20% auto;
    padding: 20px;
  }
  
  .modal-content h3 {
    font-size: 1.5rem;
  }

  .modal-content h4 {
    font-size: 1.2rem;
  }
  
  .payment-option {
    padding: 12px;
  }
  
  .payment-icon {
    font-size: 1.7rem;
    margin-right: 12px;
  }
  
  .payment-details strong {
    font-size: 1.1rem;
  }
  
  .payment-details p {
    font-size: 0.95rem;
  }
}
</style>