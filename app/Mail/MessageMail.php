<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MessageMail extends Mailable
{
    use Queueable, SerializesModels;

    public $messageContent;
    public $user;
    public $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($aMessage, $aName, $aEmail)
    {
        $this->messageContent = $aMessage;
        $this->user = $aName;
        $this->email = $aEmail;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.message');
    }
}
