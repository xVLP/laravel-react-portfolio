<?php

namespace App\Mail;

use App\Models\ContactMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactInquiryReceived extends Mailable
{
    use Queueable, SerializesModels;

    public ContactMessage $contactMessage;

    public function __construct(ContactMessage $contactMessage)
    {
        $this->contactMessage = $contactMessage;
    }

    public function build()
    {
        return $this->subject('🔔 New Portfolio Inquiry: ' . $this->contactMessage->subject)
                    ->html("
                        <div style='font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e4ddd0; borderRadius: 12px; background: #faf8f5;'>
                            <h2 style='color: #70482b;'>New Portfolio Inquiry Received!</h2>
                            <p><strong>From:</strong> {$this->contactMessage->name} (&lt;{$this->contactMessage->email}&gt;)</p>
                            <p><strong>Subject:</strong> {$this->contactMessage->subject}</p>
                            <hr style='border: none; border-top: 1px solid #e4ddd0; margin: 15px 0;'>
                            <p><strong>Message:</strong></p>
                            <blockquote style='background: #ffffff; padding: 15px; border-left: 4px solid #70482b; border-radius: 6px;'>
                                " . nl2br(e($this->contactMessage->message)) . "
                            </blockquote>
                            <hr style='border: none; border-top: 1px solid #e4ddd0; margin: 15px 0;'>
                            <p style='font-size: 12px; color: #7a6c60;'>Sent via Veronica Louise Piando Portfolio Contact System.</p>
                        </div>
                    ");
    }
}
