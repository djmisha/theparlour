<section id="contact" class="contact-section">
        <div class="container">
            <h2>Request an Invitation</h2>
            <p class="section-intro">Admission to The Parlour is by petition only. Complete the form below and our Council will review your inquiry. Not all petitions are granted — we seek only those with genuine dedication to the art.</p>
            
            <div class="form-container">
                <form id="contact-form" class="contact-form" method="post" novalidate>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Your full name" required>
                        <span class="error-message" id="name-error"></span>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Your private email" required>
                        <span class="error-message" id="email-error"></span>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="Your phone number" required>
                        <span class="error-message" id="phone-error"></span>
                    </div>

                    <div class="form-group">
                        <label for="experience">Years of Experience in Magic</label>
                        <input type="text" id="experience" name="experience" placeholder="How long have you practiced the art?">
                        <span class="error-message" id="experience-error"></span>
                    </div>

                    <div class="form-group">
                        <label for="specialization">Primary Discipline</label>
                        <input type="text" id="specialization" name="specialization" placeholder="e.g. Close-up, Mentalism, Stage, Card Magic">
                        <span class="error-message" id="specialization-error"></span>
                    </div>

                    <div class="form-group">
                        <label for="referral">Were You Referred by a Current Member?</label>
                        <input type="text" id="referral" name="referral" placeholder="Member name (if applicable)">
                        <span class="error-message" id="referral-error"></span>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Tell Us About Your Journey in Magic</label>
                        <textarea id="message" name="message" placeholder="Describe your experience, what draws you to the art, and why you seek admission to The Parlour" rows="5" required></textarea>
                        <span class="error-message" id="message-error"></span>
                    </div>
                    
                    <div class="form-group honeypot">
                        <label for="website">Website</label>
                        <input type="text" id="website" name="website" autocomplete="off">
                    </div>
                    
                    <div class="form-submit">
                        <button type="submit" class="btn" id="submit-button">Submit Your Petition</button>
                    </div>
                </form>
                <div id="form-response" class="form-response">
                    <p></p>
                </div>
            </div>
        </div>
    </section>

<script src="js/forms.js"></script>