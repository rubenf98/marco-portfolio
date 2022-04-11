<?php

namespace App\Jobs;

use App\Mail\MessageMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NotifyMessageEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $message;
    protected $user;
    protected $email;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aMessage, $aName, $aEmail)
    {
        $this->message = $aMessage;
        $this->user = $aName;
        $this->email = $aEmail;
    }


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to('marcoabreu31@hotmail.com')->queue(new MessageMail($this->message, $this->user, $this->email));
    }
}
