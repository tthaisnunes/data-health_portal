import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent implements OnInit {
  doctorMenu = [
    {
      name: 'Dashboard',
      path: '/doctor/dashboard'
    },
    {
      name: 'Agenda',
      path: '/doctor/calendar'
    },
    {
      name: 'Pacientes',
      path: '/doctor/pacient-history'
    }
  ];

  medicalClinicMenu = [
    {
      name: 'Dashboard',
      path: '/medical-clinic/dashboard'
    },
    {
      name: 'Agenda',
      path: '/medical-clinic/calendar'
    },
    {
      name: 'Pacientes',
      path: '/medical-clinic/pacient-history'
    }
  ];

  pacientMenu = [
    {
      name: 'Dashboard',
      path: '/pacient/dashboard'
    },
    {
      name: 'Médicos',
      path: '/pacient/doctor-calendar'
    },
    {
      name: 'Clínicas',
      path: '/pacient/medical-clinic-list'
    },
    {
      name: 'Histórico',
      path: '/pacient/history'
    },
  ];

  href: string;
  profileType: string;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 2 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 50 }, () =>
    ``);

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.href = this.router.url;
    
    if(this.href.includes('doctor')) {
      this.profileType = 'doctor';
    } else if(this.href.includes('medical-clinic')) {
      this.profileType = 'medical-clinic';
    }else if(this.href.includes('pacient')) {
      this.profileType = 'pacient';
    }

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}