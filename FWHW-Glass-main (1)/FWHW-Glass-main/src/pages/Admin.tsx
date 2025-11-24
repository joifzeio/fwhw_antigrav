import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  created_at: string;
}

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  product_name: string | null;
  project_details: string;
  created_at: string;
}

const Admin = () => {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: contactData, error: contactError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      const { data: quoteData, error: quoteError } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (contactError) throw contactError;
      if (quoteError) throw quoteError;

      setContacts(contactData || []);
      setQuotes(quoteData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("Failed to load submissions. You may need admin access.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-8">Admin Dashboard</h1>
          
          <Tabs defaultValue="contacts" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="contacts">Contact Submissions ({contacts.length})</TabsTrigger>
              <TabsTrigger value="quotes">Quote Requests ({quotes.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <p className="text-muted-foreground">Loading...</p>
                  ) : contacts.length === 0 ? (
                    <p className="text-muted-foreground">No contact submissions yet.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Message</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {contacts.map((contact) => (
                            <TableRow key={contact.id}>
                              <TableCell>{formatDate(contact.created_at)}</TableCell>
                              <TableCell>{contact.name}</TableCell>
                              <TableCell>{contact.email}</TableCell>
                              <TableCell>{contact.phone || 'N/A'}</TableCell>
                              <TableCell>{contact.subject || 'N/A'}</TableCell>
                              <TableCell className="max-w-md truncate">{contact.message}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quotes">
              <Card>
                <CardHeader>
                  <CardTitle>Quote Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <p className="text-muted-foreground">Loading...</p>
                  ) : quotes.length === 0 ? (
                    <p className="text-muted-foreground">No quote requests yet.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead>Project Details</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {quotes.map((quote) => (
                            <TableRow key={quote.id}>
                              <TableCell>{formatDate(quote.created_at)}</TableCell>
                              <TableCell>{quote.name}</TableCell>
                              <TableCell>{quote.email}</TableCell>
                              <TableCell>{quote.phone || 'N/A'}</TableCell>
                              <TableCell>{quote.product_name || 'N/A'}</TableCell>
                              <TableCell className="max-w-md truncate">{quote.project_details}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
