import { StyledContact } from "./styles/Contact.styles"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <StyledContact>
                    <motion.div class="formcontent"
                        initial={{opacity: 0, translateX: -300}} 
                        animate={{opacity: 1, translateX: 0}} 
                        transition={{duration: .5}}
                    >
                        <motion.form action="https://formspree.io/f/xzbozzyy" method="POST" id="my-form">
                            <div class="contactname">
                                <div class="form-group">
                                    <label for="firstName">First Name</label>
                                    <br />
                                    <input type="text" id="firstName" name="First Name" placeholder="First Name" required />
                                </div>
                                <div class="form-group">
                                    <label for="latsName">Last Name</label>
                                    <br />
                                    <input type="text" id="lastName" name="Last Name" placeholder="Last Name" required />
                                </div>
                            </div>
                            <div class="contactinfo">
                                <div class="emailholder">
                                    <label for="email">Email</label>
                                    <br />
                                    <input type="email" id="email" name="Email" placeholder="Email" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="massage">Body:</label>
                                <br />
                                <textarea name="massage" id="massage" cols="32" rows="8" required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </motion.form>
                    </motion.div>
        </StyledContact>
    )
}

export default Contact
