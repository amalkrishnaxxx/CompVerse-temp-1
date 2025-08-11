"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, CreditCard, User } from "lucide-react"

interface RegistrationData {
  name: string
  email: string
  event: string
  ageGroup: string
  phone: string
  specialRequests: string
  paymentMethod: string
  cardNumber: string
  expiryDate: string
  cvv: string
}

export default function RegistrationSection() {
  const [step, setStep] = useState<"form" | "payment" | "confirmation">("form")
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    name: "",
    email: "",
    event: "",
    ageGroup: "",
    phone: "",
    specialRequests: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [registrationNumber, setRegistrationNumber] = useState("")

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Generate unique registration number
    const regNumber = `CV${Date.now().toString().slice(-6)}`
    setRegistrationNumber(regNumber)
    setStep("confirmation")
  }

  const updateField = (field: keyof RegistrationData, value: string) => {
    setRegistrationData((prev) => ({ ...prev, [field]: value }))
  }

  if (step === "confirmation") {
    return (
      <section id="register" className="py-20 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#FFC52C] to-[#00AEEF] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="glass glow-border">
              <CardContent className="p-12">
                <CheckCircle className="w-20 h-20 text-[#FFC52C] mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-4 font-mono">Registration Successful!</h2>
                <p className="text-xl text-[#F6F6F6] mb-8">
                  Thank you for registering! Your payment has been processed successfully.
                </p>

                <div className="bg-gradient-to-r from-[#FFC52C] to-[#00AEEF] p-6 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold text-[#00367D] mb-2">Registration Number</h3>
                  <p className="text-3xl font-mono font-bold text-[#00367D]">{registrationNumber}</p>
                </div>

                <div className="text-left space-y-3 mb-8">
                  <div className="flex justify-between">
                    <span className="text-[#F6F6F6]">Name:</span>
                    <span className="text-white font-semibold">{registrationData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F6F6F6]">Event:</span>
                    <span className="text-white font-semibold">{registrationData.event}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#F6F6F6]">Age Group:</span>
                    <span className="text-white font-semibold">{registrationData.ageGroup}</span>
                  </div>
                </div>

                <p className="text-[#F6F6F6] text-sm mb-6">
                  A confirmation email has been sent to {registrationData.email} with event details and instructions.
                </p>

                <Button
                  onClick={() => setStep("form")}
                  className="bg-gradient-to-r from-[#00AEEF] to-[#FFC52C] text-white font-semibold px-8 py-3 rounded-xl hover-glow"
                >
                  Register for Another Event
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-20 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#FFC52C] to-[#00AEEF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-[#00AEEF] to-[#FFC52C] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            {step === "form" ? "Event Registration" : "Payment Details"}
          </h2>
          <p className="text-xl text-[#F6F6F6] max-w-2xl mx-auto">
            {step === "form"
              ? "Join the excitement! Register for your favorite events now"
              : "Complete your registration with secure payment"}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass glow-border">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                {step === "form" ? (
                  <>
                    <User className="w-6 h-6 mr-3 text-[#FFC52C]" />
                    Registration Information
                  </>
                ) : (
                  <>
                    <CreditCard className="w-6 h-6 mr-3 text-[#FFC52C]" />
                    Payment Information
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === "form" ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[#F6F6F6] mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={registrationData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="glass border-[#F6F6F6]/30 text-white placeholder:text-[#F6F6F6]/60"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#F6F6F6] mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={registrationData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="glass border-[#F6F6F6]/30 text-white placeholder:text-[#F6F6F6]/60"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="event" className="text-[#F6F6F6] mb-2 block">
                        Select Event *
                      </Label>
                      <Select required onValueChange={(value) => updateField("event", value)}>
                        <SelectTrigger className="glass border-[#F6F6F6]/30 text-white">
                          <SelectValue placeholder="Choose an event" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="science-fair">Science Fair Extravaganza</SelectItem>
                          <SelectItem value="gaming-championship">Gaming Championship Finals</SelectItem>
                          <SelectItem value="basketball-camp">Basketball Skills Camp</SelectItem>
                          <SelectItem value="coding-bootcamp">Coding Bootcamp for Teens</SelectItem>
                          <SelectItem value="board-game-marathon">Board Game Marathon</SelectItem>
                          <SelectItem value="swimming-competition">Swimming Competition</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="ageGroup" className="text-[#F6F6F6] mb-2 block">
                        Age Group *
                      </Label>
                      <Select required onValueChange={(value) => updateField("ageGroup", value)}>
                        <SelectTrigger className="glass border-[#F6F6F6]/30 text-white">
                          <SelectValue placeholder="Select age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kids">Kids (5-17 years)</SelectItem>
                          <SelectItem value="adults">Adults (18+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#F6F6F6] mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={registrationData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="glass border-[#F6F6F6]/30 text-white placeholder:text-[#F6F6F6]/60"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequests" className="text-[#F6F6F6] mb-2 block">
                      Special Requests or Dietary Requirements
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={registrationData.specialRequests}
                      onChange={(e) => updateField("specialRequests", e.target.value)}
                      className="glass border-[#F6F6F6]/30 text-white placeholder:text-[#F6F6F6]/60"
                      placeholder="Any special requirements or requests..."
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00AEEF] to-[#FFC52C] text-white font-semibold py-3 text-lg rounded-xl hover-glow"
                  >
                    Continue to Payment
                  </Button>
                </form>
              ) : (
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="paymentMethod" className="text-[#F6F6F6] mb-2 block">
                      Payment Method *
                    </Label>
                    <Select required onValueChange={(value) => updateField("paymentMethod", value)}>
                      <SelectTrigger className="glass border-[#F6F6F6]/30 text-white">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-card">Credit Card</SelectItem>
                        <SelectItem value="debit-card">Debit Card</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="cardNumber" className="text-[#F6F6F6] mb-2 block">
                      Card Number *
                    </Label>
                    <Input
                      id="cardNumber"
                      required
                      value={registrationData.cardNumber}
                      onChange={(e) => updateField("cardNumber", e.target.value)}
                      className="glass border-[#F6F6F6]/30 text-white placeholder:text-[#F6F6F6]/60"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="expiryDate" className="text-[#F6F6F6] mb-2 block">
                        Expiry Date *
                      </Label>
                      <Input
                        id="expiryDate"
                        required
                        value={registrationData.expiryDate}
                        onChange={(e) => updateField("expiryDate", e.target.value)}
                        className="glass border-[#F6F6F6]/30 text-white placeholder:text-[#F6F6F6]/60"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-[#F6F6F6] mb-2 block">
                        CVV *
                      </Label>
                      <Input
                        id="cvv"
                        required
                        value={registrationData.cvv}
                        onChange={(e) => updateField("cvv", e.target.value)}
                        className="glass border-[#F6F6F6]/30 text-white placeholder:text-[#F6F6F6]/60"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className="glass rounded-lg p-4 border border-[#FFC52C]/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#F6F6F6]">Event Fee:</span>
                      <span className="text-white font-semibold">$25.00</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#F6F6F6]">Processing Fee:</span>
                      <span className="text-white font-semibold">$2.50</span>
                    </div>
                    <hr className="border-[#F6F6F6]/30 my-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-[#FFC52C] font-semibold text-lg">Total:</span>
                      <span className="text-[#FFC52C] font-bold text-xl">$27.50</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setStep("form")}
                      variant="outline"
                      className="flex-1 border-[#F6F6F6] text-[#F6F6F6] hover:bg-[#F6F6F6] hover:text-[#00367D] bg-transparent"
                    >
                      Back to Form
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#00AEEF] to-[#FFC52C] text-white font-semibold py-3 text-lg rounded-xl hover-glow"
                    >
                      Complete Payment
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
