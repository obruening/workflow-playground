insert into act_id_group (id_, name_) values ('create_order', 'create_order');
insert into act_id_group (id_, name_) values ('approve_order', 'approve_order');

insert into act_id_user (id_, first_, last_) values ('anna', 'Anna', 'Alpha');
insert into act_id_user (id_, first_, last_) values ('joe', 'Joe', 'Johnson');
insert into act_id_user (id_, first_, last_) values ('mike', 'Mike', 'Miller');

insert into act_id_membership (user_id_, group_id_) values ('anna', 'create_order');

insert into act_id_membership (user_id_, group_id_) values ('joe', 'approve_order');
insert into act_id_membership (user_id_, group_id_) values ('mike', 'approve_order');

