import React, {useState} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core"
import { useForm, FormProvider} from "react-hook-form"

import {commerce} from "../../lib/commerce"

import { FormInput } from './CustomTextField'

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState("");
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("");
    const methods = useForm();

    const countries

  return (
    <>
        <Typography variant={'h4'} gutterBottom>
            Shipping Address
        </Typography>
        <FormProvider { ... methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                        <FormInput 
                        required = {true}
                        name="firstName" 
                        label="First name"/>
                        <FormInput 
                        required = {true}
                        name="lastName" 
                        label="Last name"/>
                        <FormInput 
                        required = {true}
                        name="address1" 
                        label="Address"/>
                        <FormInput 
                        required = {true}
                        name="email" 
                        label="Email"/>
                        <FormInput 
                        required = {true}
                        name="city" 
                        label="City"/>
                        <FormInput 
                        required = {true}
                        name="zip" 
                        label="ZIP"/>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>
                                Shipping Country
                            </InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select country
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>
                                Shipping subdivision
                            </InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select country
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>
                                Shipping Country
                            </InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select options
                                </MenuItem>
                            </Select>
                        </Grid>
                </Grid> 
            </form>
        </FormProvider>
    </>
  )
}

export default AddressForm