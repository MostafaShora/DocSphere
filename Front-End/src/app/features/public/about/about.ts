import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

interface StaffMember {
  name: string;
  specialty: string;
  image: string;
  type: 'doctor' | 'admin';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {

  staff: StaffMember[] = [];
  filteredStaff: StaffMember[] = [];

  activeFilter: 'all' | 'doctor' | 'admin' = 'all';

  isLoadingStaff = false;
  staffErrorMessage = '';

  testimonials: any[] = [
    {
      name: 'Abdo',
      text: 'The medical staff is outstanding.',
      rating: 5
    },
    {
      name: 'Nour',
      text: 'I felt like I was with family.',
      rating: 5
    },
    {
      name: 'Mohamed Ali',
      text: 'Highly professional staff.',
      rating: 4
    }
  ];

  newName: string = '';
  newText: string = '';
  newRating: number = 5;

  readonly features = [
    {
      title: 'Online Appointment Booking',
      description: 'Book consultations quickly from any device with real-time availability.'
    },
    {
      title: 'Secure Authentication',
      description: 'Protect user accounts with encrypted login and verification flows.'
    },
    {
      title: 'Doctor Dashboard',
      description: 'A focused dashboard for doctors to manage appointments and patient care.'
    },
    {
      title: 'Patient Dashboard',
      description: 'Patient tools for bookings, medical records, and appointment tracking.'
    },
    {
      title: 'Admin Control Panel',
      description: 'Role-based admin controls for managing users, schedules, and services.'
    },
    {
      title: 'Email Verification',
      description: 'Verified accounts improve trust and secure access for all users.'
    },
    {
      title: 'Password Reset',
      description: 'Secure password recovery with token-based reset links and validation.'
    }
  ];

  private readonly testimonialsStorageKey = 'aboutPageTestimonials';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTestimonials();
    this.isLoadingStaff = true;
    this.staffErrorMessage = '';
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.http.get<any>(`${environment.apiUrl}/doctors`).subscribe({
      next: response => {
        const doctors: any[] = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : [];

        const mappedDoctors = doctors.map(d => ({
          name: d.name || `${d.firstName || ''} ${d.lastName || ''}`.trim() || 'Doctor',
          specialty: d.specialty || d.department || 'General Practice',
          image: d.image || d.photo || 'https://via.placeholder.com/400x300?text=Doctor',
          type: 'doctor' as const
        }));

        this.staff = mappedDoctors;
        this.applyFilter('all');
        this.isLoadingStaff = false;
      },
      error: err => {
        console.error('GET /api/doctors failed', {
          status: err.status,
          body: err.error || err.message
        });
        this.staffErrorMessage = 'Unable to load doctor profiles at the moment.';
        this.isLoadingStaff = false;
      }
    });
  }

  // ================= Filter =================

  applyFilter(type: 'all' | 'doctor' | 'admin'): void {
    this.activeFilter = type;

    if (type === 'all') {
      this.filteredStaff = this.staff;
    } else {
      this.filteredStaff = this.staff.filter(p => p.type === type);
    }
  }

  // ================= Testimonials =================

  loadTestimonials(): void {
    const stored = localStorage.getItem(this.testimonialsStorageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.testimonials = parsed;
        }
      } catch {
        // ignore invalid storage data
      }
    }
  }

  saveTestimonials(): void {
    localStorage.setItem(this.testimonialsStorageKey, JSON.stringify(this.testimonials));
  }

  addTestimonial(): void {
    if (!this.newName || this.newName.trim().length < 3) {
      alert('Enter a valid name.');
      return;
    }

    if (!this.newText || this.newText.trim().length < 10) {
      alert('Enter a longer comment.');
      return;
    }

    this.testimonials.unshift({
      name: this.newName.trim(),
      text: this.newText.trim(),
      rating: this.newRating
    });

    this.saveTestimonials();
    this.newName = '';
    this.newText = '';
    this.newRating = 5;
  }

  deleteTestimonial(index: number): void {
    this.testimonials.splice(index, 1);
    this.saveTestimonials();
  }

  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/400x300?text=Staff';
  }

}