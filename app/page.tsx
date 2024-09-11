"use client";

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { useTheme } from "next-themes"
import { Menu, Moon, Sun } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Timeline from './timeline'
import Skills from './skills'
import Projects from './projects'
import { motion, AnimatePresence } from 'framer-motion'



export default function Portfolio() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background text-foreground"
      >
        {/* Floating Navbar */}
        <header className="fixed top-6 left-0 right-0 z-50 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center md:justify-center">
            <div className="md:absolute md:left-6">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-md shadow-lg md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col h-full">
                    <div className="flex-grow py-6">
                      <ul className="space-y-4">
                        <li><a href="#" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#timeline" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Education & Experience</a></li>
                        <li><a href="#skills" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                        <li><a href="#projects" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                        <li><a href="#contact" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                      </ul>
                    </div>
                    <div className="py-6 flex justify-between items-center border-t">
                      <span className="text-sm text-muted-foreground">© 2023 Your Name</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleTheme}
                        className="bg-background/80 backdrop-blur-md shadow-lg"
                      >
                        {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <nav className="hidden md:block bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
              <ul className="flex space-x-8">
                <li><a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a></li>
                <li><a href="#timeline" className="text-sm font-medium hover:text-primary transition-colors">Education & Work Experience</a></li>
                <li><a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
            <div className="md:absolute md:right-6">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="bg-background/80 backdrop-blur-md shadow-lg"
              >
                {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mx-auto py-32 bg-zinc-100 dark:bg-zinc-950 text-center h-screen flex flex-col justify-center items-center">
          <GradualSpacing
            className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="Joshua Philip"
          />
          <p className="text-xl mb-8">Data Analytics Specialist, Software Developer & Mobile App Expert</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <Skills></Skills>

        {/* Timeline Section */}
        <Timeline></Timeline>

        {/* Projects Section */}
        <Projects></Projects>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-zinc-100 dark:bg-zinc-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>Fill out the form below to send me a message</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background text-center py-8">
          <p>&copy; 2023 Joshua Philip. All rights reserved.</p>
        </footer>
      </motion.div>
    </AnimatePresence>
  )
}